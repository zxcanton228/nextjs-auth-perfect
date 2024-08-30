import { axiosClassic } from "@/api/axios"
import type { IFormData, IUser } from "@/types/types"
import { removeFromStorage, saveTokenStorage } from "./auth.helper"

interface IAuthResponse {
	accessToken: string
	user: IUser
}

export enum EnumTokens {
	"ACCESS_TOKEN" = "accessToken",
	"REFRESH_TOKEN" = "refreshToken",
}

class AuthService {
	private readonly _BASE_URL = "/auth"

	public async main(
		type: "login" | "register",
		data: IFormData,
		token?: string | null
	) {
		const response = await axiosClassic.post<IAuthResponse>(
			`${this._BASE_URL}/${type}`,
			data,
			{
				headers: {
					recaptcha: token,
				},
			}
		)

		if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

		return response
	}

	public async getNewTokens() {
		const response = await axiosClassic.post<IAuthResponse>(
			`${this._BASE_URL}/access-token`
		)

		if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

		return response
	}

	public async getNewTokensByRefresh(refreshToken: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			`${this._BASE_URL}/access-token`,
			{},
			{
				headers: {
					Cookie: `refreshToken=${refreshToken}`,
				},
			}
		)

		return response.data
	}

	public async logout() {
		const response = await axiosClassic.post<boolean>(
			`${this._BASE_URL}/logout`
		)

		if (response.data) removeFromStorage()

		return response
	}
}

export default new AuthService()

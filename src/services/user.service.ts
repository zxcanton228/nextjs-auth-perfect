import { instance } from "@/api/axios"
import type { IUser } from "@/types/types"

class UserService {
	private readonly _BASE_URL = "/users"

	public async fetchProfile() {
		return instance.get<IUser>(`${this._BASE_URL}/profile`)
	}

	public async fetchPremium() {
		return instance.get<{ text: string }>(`${this._BASE_URL}/premium`)
	}

	public async fetchManagerContent() {
		return instance.get<{ text: string }>(`${this._BASE_URL}/manager`)
	}

	public async fetchList() {
		return instance.get<IUser[]>(`${this._BASE_URL}/list`)
	}
}

export default new UserService()

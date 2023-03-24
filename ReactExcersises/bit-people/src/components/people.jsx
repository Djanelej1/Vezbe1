import { hideEmail } from "./hideEmail"

export default class People {
    constructor({ name, dob, email, picture, gender }) {
        this.name = name
        this.sex = gender
        this.dateOfBirth = dob
        this.fullEmail = email
        this.picture = picture
    }

    isFemale() {
        return this.sex === 'female'
    }

    get email() {
        return hideEmail(this.fullEmail)
    }
}
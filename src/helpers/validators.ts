export const required = (value: string) => value ? undefined : "Value required"

export const minLength = (length: number) => (value: string) => {
    return value && (+value.length >= length ? undefined : `Must be ${length} characters or more`)
}

export const maxLength = (length: number) => (value: string) => {
    return value && (+value.length < length ? undefined : `Must be less characters then ${length}`)
}


export const email = (value: string) => (
    value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? undefined
        : 'Invalid email address'
)
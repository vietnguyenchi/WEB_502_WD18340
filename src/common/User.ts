type Hair = {
  color: string
  type: string
}

type Coordinates = {
  lat: number
  lng: number
}

type Bank = {
  cardExpire: string
  cardNumber: string
  cardType: string
  currency: string
  iban: string
}

type Address = {
  address: string
  city: string
  coordinates: Coordinates
  postalCode: string
  state: string
}

type Company = {
  address: Address
  department: string
  name: string
  title: string
}

type Cryto = {
  coin: string
  wallet: string
  network: string
}

export interface User {
  id: number
  firstName: string
  lastName: string
  maidenName: string
  age: number
  gender: 'male' | 'female' | 'hehe'
  email: string
  phone: string
  username: string
  password: string
  birthDate: string
  image: string
  bloodGroup?: string
  height: number
  weight: number
  eyeColor?: string
  hair?: Hair
  domain: string
  ip: string
  address: Address
  macAddress: string
  university: string
  bank: Bank
  company: Company
  ein?: string
  ssn?: string
  userAgent?: string
  crypto?: Cryto
}

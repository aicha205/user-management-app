export type userType={
    id:number,
    avatar:string,
    first_name:string,
    last_name:string,
    email:string
}
export type HttpUsersListResponse={
    data: any
    Users:userType[]
}

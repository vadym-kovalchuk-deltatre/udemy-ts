enum Role {
  admin = "an admin",
  customer = "a customer",
  user = "an user",
}

for (let role in Role) {
  console.log(Role[role as keyof typeof Role]);
}

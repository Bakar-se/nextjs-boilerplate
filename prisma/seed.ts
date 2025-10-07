import prisma from "@/lib/prisma";
import { hashPassword } from "@/lib/authHelper"; // adjust to your actual helper

async function createAdmin() {
  const existingAdmin = await prisma.user.findFirst({
    where: { email: "admin@ferd.ai" },
  });

  if (!existingAdmin) {
    await prisma.user.create({
      data: {
        first_name: "Muhammad",
        last_name: "Abu Bakar",
        username: "bakar",
        email: "ironsamurai786@gmail.com",
        password: await hashPassword("@Graysclub10"),
        role: "ADMIN",
      },
    });

    console.log("✅ Admin user created successfully!");
  } else {
    prisma.user.update({
      where: { id: existingAdmin.id },
      data: {
        first_name: "Muhammad",
        last_name: "Abu Bakar",
        username: "bakar",
        email: "ironsamurai786@gmail.com",
        password: await hashPassword("@Graysclub10"),
        role: "ADMIN",
      },
    });
  }
}

createAdmin()
  .catch((err) => {
    console.error("❌ Error creating admin:", err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

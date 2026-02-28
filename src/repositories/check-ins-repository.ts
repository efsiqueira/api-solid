import type { Prisma, CheckIn } from "generated/prisma/client"

export interface CheckInsRepository {
  // findById(id: string): Promise<CheckIn | null>
  // findByEmail(email: string): Promise<CheckIn | null>
  create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn>
}
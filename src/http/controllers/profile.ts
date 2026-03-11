import { makeGetUserProfileUseCase } from "@/use-cases/factories/make-get-user-profile-use-case"
import type { FastifyRequest, FastifyReply } from "fastify"

export async function profile(request: FastifyRequest, reply: FastifyReply) {
  // try {
  //   const authenticateUseCase = makeAuthenticateUseCase()

  //   await authenticateUseCase.execute({
  //     email,
  //     password,
  //   })
  // } catch (error) {
  //   if (error instanceof InvalidCredentialsError) {
  //     return reply.status(400).send({
  //       message: error.message
  //     })
  //   }

  //   throw error
  // }

  console.log(request.user.sub)
  const getUserProfile = makeGetUserProfileUseCase()

  const { user } = await getUserProfile.execute({
    userId: request.user.sub
  })

  return reply.status(200).send({
    user: {
      ...user,
      password_hash: undefined
    }
  })
}
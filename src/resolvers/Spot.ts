import { Context } from '../utils'

export const Spot = {
    users: ({ id }, args, ctx: Context) => {
        return ctx.prisma.user({id}).spots()
    }
}   

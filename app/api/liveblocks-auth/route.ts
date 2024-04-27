import { auth, currentUser } from "@clerk/nextjs";
import { Liveblocks } from "@liveblocks/node";
import { ConvexHttpClient } from "convex/browser";

import { api } from "@/convex/_generated/api";

const convex = new ConvexHttpClient(
  process.env.NEXT_PUBLIC_CONVEX_URL!
);

const liveblocks = new Liveblocks({
  secret: "sk_dev_F5HSdvihxxkXbb4c5WFZ8tf626KiEl0BJu2w-1HIwhUunSA9NJcITTapHB0SR4Y6",
});

export async function POST(request: Request) {
  const authorization = await auth();
  const user = await currentUser();

  if (!authorization || !user) {
    return new Response("Unauthorized", { status: 403 });
  }

  const { room } = await request.json();
  const foxdraw = await convex.query(api.foxdraw.get, { id: room });

  if (foxdraw?.orgId !== authorization.orgId) {
    return new Response("Unauthorized", { status: 403 });
  }

  const userInfo = {
    name: user.firstName || "Teammeate",
    picture: user.imageUrl,
  };

  const session = liveblocks.prepareSession(
    user.id,
    { userInfo }
  );

  if (room) {
    session.allow(room, session.FULL_ACCESS);
  }

  const { status, body } = await session.authorize();
  return new Response(body, { status });
};
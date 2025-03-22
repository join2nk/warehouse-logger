import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/server/db";
export default async function Home() {
  const data = await prisma.user.findMany();
  return (
    <div>
      {data.map((user) => (
        <div key={user.id}>{user.email}</div>
      ))}

      <Button>hello</Button>
    </div>
  );
}

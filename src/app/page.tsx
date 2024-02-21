import { redirect } from "next/navigation";

export default function RootPage() {

  redirect('/home/technologies')

  return (
    <div>
    </div>
  );
}

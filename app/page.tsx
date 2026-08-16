import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export default function Home() {
  return (
    <main>
      <DropdownMenu>
        <DropdownMenuTrigger>Open menu</DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </main>
  );
}
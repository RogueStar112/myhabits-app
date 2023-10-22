"use client";

import { useRouter } from "next/navigation";

export default function EditItem() {
  const router = useRouter();

  // Fetch and display the item with the specified ID for editing

  return (
    <div>
      <h1>Edit Item {router.query.name}</h1>
      {/* Render the editing form and content here */}
    </div>
  );
}

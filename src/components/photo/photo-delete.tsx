'use client'
import photoDelete from "@/actions/photo-delete"
import React from "react"

export default function PhotoDelete({ id }: { id: string }) {
    const [loading, setLoading] = React.useState(false);
    async function handleClick() {
      setLoading(true);
      const confirm = window.confirm('Tem certeza que deseja deletar?');
      if (confirm) {
        await photoDelete(id);
      }
      setLoading(false);
    }

    return (
        <> 
            {loading ? (
                <button className="bg-gray-300 py-1 px-2 leading-4 border border-transparent text-sm font-custom cursor-pointer rounded-md transition-transform duration-100 focus:outline-none hover:bg-white hover:shadow-outline hover:border-gray-700" disabled>Deletar</button>
            ) : (
                <button className="bg-gray-300 py-1 px-2 leading-4 border border-transparent text-sm font-custom cursor-pointer rounded-md transition-transform duration-100 focus:outline-none hover:bg-white hover:shadow-outline hover:border-gray-700" onClick={handleClick}>Deletar</button>)}
        </>
    ) 
}
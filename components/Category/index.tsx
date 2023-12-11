import React from 'react'
import { Card } from './Card'

interface CategoryProps {
    categories: any[]
}

export const Categories: React.FC<CategoryProps> = ({ categories }) => {
    return (
        <div className="w-screen flex flex-wrap gap-10 mt-24" >
            {
                categories.map((category) => (
                    <Card key={category.id} catregory={category} />
                ))
            }
        </div>
    )
}

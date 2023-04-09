import React from 'react'
import "./List.scss"
import Card from '../Card/Card';



const List = () => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/15164033/pexels-photo-15164033.jpeg?cs=srgb&dl=pexels-carlos-santiago-15164033.jpg&fm=jpg&w=1920&h=2880&_gl=1*1uq5bgh*_ga*MTU0MjEzMDgyNy4xNjgwNjU0MjQ3*_ga_8JE65Q40S6*MTY4MDcxMTQ1Ny4yLjEuMTY4MDcxMjYwNC4wLjAuMA..",
            img2: "https://images.pexels.com/photos/15164034/pexels-photo-15164034.jpeg?cs=srgb&dl=pexels-carlos-santiago-15164034.jpg&fm=jpg&w=1920&h=2880&_gl=1*1hd7xeo*_ga*MTU0MjEzMDgyNy4xNjgwNjU0MjQ3*_ga_8JE65Q40S6*MTY4MDcxMTQ1Ny4yLjEuMTY4MDcxMjYyNS4wLjAuMA..",
            title: "Long-sleeve coat",
            isNew: false,
            oldPrice: 19,
            price: 22
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/8484114/pexels-photo-8484114.jpeg?cs=srgb&dl=pexels-sasha-kim-8484114.jpg&fm=jpg&w=1920&h=2880&_gl=1*1ezr176*_ga*MTU0MjEzMDgyNy4xNjgwNjU0MjQ3*_ga_8JE65Q40S6*MTY4MDczNTAxMS4zLjEuMTY4MDczNzA5Mi4wLjAuMA..",
            img2: "https://images.pexels.com/photos/8484311/pexels-photo-8484311.jpeg?cs=srgb&dl=pexels-sasha-kim-8484311.jpg&fm=jpg&w=1920&h=3034&_gl=1*1ezr176*_ga*MTU0MjEzMDgyNy4xNjgwNjU0MjQ3*_ga_8JE65Q40S6*MTY4MDczNTAxMS4zLjEuMTY4MDczNzA5Mi4wLjAuMA..",
            title: "Lorem ipsum dolor sit",
            isNew: true,
            oldPrice: 19,
            price: 29
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/7691121/pexels-photo-7691121.jpeg?cs=srgb&dl=pexels-monstera-7691121.jpg&fm=jpg&w=1920&h=2880&_gl=1*wyzgln*_ga*MTU0MjEzMDgyNy4xNjgwNjU0MjQ3*_ga_8JE65Q40S6*MTY4MDczNTAxMS4zLjEuMTY4MDczNzU2OS4wLjAuMA..",
            img2: "https://images.pexels.com/photos/7691068/pexels-photo-7691068.jpeg?cs=srgb&dl=pexels-monstera-7691068.jpg&fm=jpg&w=1920&h=2880&_gl=1*wyzgln*_ga*MTU0MjEzMDgyNy4xNjgwNjU0MjQ3*_ga_8JE65Q40S6*MTY4MDczNTAxMS4zLjEuMTY4MDczNzU2OS4wLjAuMA..",
            title: "Lorem ipsum dolor sit",
            isNew: false,
            oldPrice: 19,
            price: 35
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/8483668/pexels-photo-8483668.jpeg?cs=srgb&dl=pexels-sasha-kim-8483668.jpg&fm=jpg&w=1920&h=2880&_gl=1*18fei6b*_ga*MTU0MjEzMDgyNy4xNjgwNjU0MjQ3*_ga_8JE65Q40S6*MTY4MDczNTAxMS4zLjEuMTY4MDczNzg4OS4wLjAuMA..",
            img2: "https://images.pexels.com/photos/8483685/pexels-photo-8483685.jpeg?cs=srgb&dl=pexels-sasha-kim-8483685.jpg&fm=jpg&w=1920&h=2880&_gl=1*18fei6b*_ga*MTU0MjEzMDgyNy4xNjgwNjU0MjQ3*_ga_8JE65Q40S6*MTY4MDczNTAxMS4zLjEuMTY4MDczNzg4OS4wLjAuMA..",
            title: "Lorem ipsum dolor sit",
            isNew: true,
            oldPrice: 19,
            price: 38
        },
        {
            id: 5,
            img: "https://images.pexels.com/photos/9604303/pexels-photo-9604303.jpeg?cs=srgb&dl=pexels-ron-lach-9604303.jpg&fm=jpg&w=1920&h=2879&_gl=1*56c70k*_ga*MTkzNDM0NTU0OC4xNjgxMDcwMDk3*_ga_8JE65Q40S6*MTY4MTA3MDA5OC4xLjEuMTY4MTA3MDE0NS4wLjAuMA..",
            img2: "https://images.pexels.com/photos/9604305/pexels-photo-9604305.jpeg?cs=srgb&dl=pexels-ron-lach-9604305.jpg&fm=jpg&w=1920&h=2879&_gl=1*ktb00o*_ga*MTkzNDM0NTU0OC4xNjgxMDcwMDk3*_ga_8JE65Q40S6*MTY4MTA3MDA5OC4xLjEuMTY4MTA3MDE4OC4wLjAuMA..",
            title: "Lorem ipsum dolor sit",
            isNew: true,
            oldPrice: 19,
            price: 18
        },
        {
            id: 6,
            img: "https://images.pexels.com/photos/9558906/pexels-photo-9558906.jpeg?cs=srgb&dl=pexels-mart-production-9558906.jpg&fm=jpg&w=1920&h=2880&_gl=1*9t96u*_ga*MTkzNDM0NTU0OC4xNjgxMDcwMDk3*_ga_8JE65Q40S6*MTY4MTA3MDA5OC4xLjEuMTY4MTA3MDIyNi4wLjAuMA..",
            img2: "https://images.pexels.com/photos/9558242/pexels-photo-9558242.jpeg?cs=srgb&dl=pexels-mart-production-9558242.jpg&fm=jpg&w=1920&h=2880&_gl=1*1umt9nh*_ga*MTkzNDM0NTU0OC4xNjgxMDcwMDk3*_ga_8JE65Q40S6*MTY4MTA3MDA5OC4xLjEuMTY4MTA3MDI0NS4wLjAuMA..",
            title: "Lorem ipsum dolor sit",
            isNew: true,
            oldPrice: 19,
            price: 41
        },
        {
            id: 7,
            img: "https://images.pexels.com/photos/9558939/pexels-photo-9558939.jpeg?cs=srgb&dl=pexels-mart-production-9558939.jpg&fm=jpg&w=1920&h=2880&_gl=1*19us7l7*_ga*MTkzNDM0NTU0OC4xNjgxMDcwMDk3*_ga_8JE65Q40S6*MTY4MTA3MDA5OC4xLjEuMTY4MTA3MDYxMS4wLjAuMA..",
            img2: "https://images.pexels.com/photos/9558897/pexels-photo-9558897.jpeg?cs=srgb&dl=pexels-mart-production-9558897.jpg&fm=jpg&w=1920&h=2880&_gl=1*19us7l7*_ga*MTkzNDM0NTU0OC4xNjgxMDcwMDk3*_ga_8JE65Q40S6*MTY4MTA3MDA5OC4xLjEuMTY4MTA3MDYxMS4wLjAuMA..",
            title: "Lorem ipsum dolor sit",
            isNew: true,
            oldPrice: 19,
            price: 39
        },
        {
            id: 8,
            img: "https://images.pexels.com/photos/9558929/pexels-photo-9558929.jpeg?cs=srgb&dl=pexels-mart-production-9558929.jpg&fm=jpg&w=1920&h=2880&_gl=1*ih3tik*_ga*MTkzNDM0NTU0OC4xNjgxMDcwMDk3*_ga_8JE65Q40S6*MTY4MTA3MDA5OC4xLjEuMTY4MTA3MDYxMS4wLjAuMA..",
            img2: "https://images.pexels.com/photos/9558934/pexels-photo-9558934.jpeg?cs=srgb&dl=pexels-mart-production-9558934.jpg&fm=jpg&w=1920&h=2880&_gl=1*ih3tik*_ga*MTkzNDM0NTU0OC4xNjgxMDcwMDk3*_ga_8JE65Q40S6*MTY4MTA3MDA5OC4xLjEuMTY4MTA3MDYxMS4wLjAuMA..",
            title: "Lorem ipsum dolor sit",
            isNew: false,
            oldPrice: 19,
            price: 26
        }
        
    ];

  return (
    <div className="list">
        {data?.map(item=>(
            <Card key={item.id} item={item} />
        ))}
    </div>
  )
}

export default List
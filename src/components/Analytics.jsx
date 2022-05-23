import React from "react";
import Laptop from '../assests/comp.jpeg'

const Analytics = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
                <div className="flex flex-col justify-center">
                    <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analaytics Centerally</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsa minima, nisi repellendus aliquam modi molestiae culpa provident perspiciatis officia ex consequatur, mollitia cupiditate. Eaque in delectus at doloribus corrupti.
                        Laborum nulla dicta placeat ipsum eligendi dolore corporis non laboriosam, accusantium repellendus natus quod ut ipsam quia facere cumque earum deleniti ex perspiciatis eum! Id accusantium unde aut maiores deserunt?
                        Quidem sapiente architecto ipsum placeat consequatur vero tempora molestiae, voluptates quia doloribus, minima magnam quos rem ratione aspernatur iure rerum nulla! Temporibus quo voluptatum ab veniam praesentium eveniet rem non.
                        Maiores sapiente ipsum adipisci, corrupti iste aut commodi quibusdam fugiat impedit placeat ad eius quasi, enim ducimus eum corporis quia quos eveniet nam dolorem iusto vero non rem! Modi, temporibus!
                    </p>
                    <button className="bg-black text-[#00df90] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics
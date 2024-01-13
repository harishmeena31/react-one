import React from 'react'
import vg from "../assets/p2.webp"
import {AiFillGoogleCircle,
        AiFillAmazonCircle,
        AiFillYoutube,
        AiFillInstagram,
           } from "react-icons/ai"

function Home() {
  return (
    <>
    <div className='home'>
         <main>
            <h1>TonyStark</h1>
            <p>solution to all your problem</p>
         </main>
    </div>

    <div className='home2'> 
    <img src={vg} alt="Graphics" />

    <div>
      <p>
        We are your one and only solution to the tech
        problems you face
        every day. We are leading tech company whose aim
        is to increase the
        problem solving ability in children.</p>
    </div>

    </div>

    <div className='home3' id='about'>
      <div>
      <h1>who we are?</h1>
        <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptates est adipisci dolorem iste placeat, ipsam aut velit saepe odit doloremque. Quam eveniet ad laudantium illo repudiandae molestiae? Natus itaque soluta ullam doloribus quos quis ex, exercitationem blanditiis dolorem assumenda facere, nam eum. Amet accusamus facere consequuntur sit quisquam incidunt odio, cupiditate omnis esse officiis optio. Quidem soluta eos laboriosam, repellat vel alias rem, vero iste omnis est incidunt in eveniet velit temporibus exercitationem nesciunt voluptates dolorum! Maxime voluptates dignissimos corrupti eius itaque aut hic fugit voluptate iure. Doloremque, non dicta pariatur vitae atque officia quisquam voluptate recusandae. Similique dolor nulla officia repellat perferendis, rerum nesciunt hic deserunt, molestiae debitis cupiditate aut ipsa laudantium quam nihil repudiandae ratione fuga voluptate perspiciatis numquam beat.
        </p>
      </div>
    </div>


    <div className='home4' id='brands'>
      <div>
        <h1>Brands</h1>
        <article>
          <div
            style={{
              animationDelay: "0.3s"
            }}
            >
            <AiFillGoogleCircle />
            <p>Google</p>
          </div>

          <div
            style={{
              animationDelay: "0.5s"
            }}
            >
            <AiFillAmazonCircle />
            <p>Amazon</p>
          </div>

          <div
            style={{
              animationDelay: "0.7s"
            }}
            >
            <AiFillYoutube />
            <p>Youtube</p>
          </div>
          <div
            style={{
              animationDelay: "0.9s"
            }}
            >
            <AiFillInstagram />
            <p>Intagram</p>
          </div>
        </article>
      </div>
    </div>
    </>
  )
}

export default Home;
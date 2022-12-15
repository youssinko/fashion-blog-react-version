
import { Link } from "react-router-dom"
export default function Main(){
    return(
        <>
        <h1>Sartre's List</h1>
        <h2 className="subHeader">Better-Dressed People</h2>
        <ul>
        <Link to="/women">
            <div>Women's</div>
            </Link>
            <Link to="/men">
            <div>Men's</div>
            </Link>
        <Link to="/on">
            <div>On The Street</div>
            </Link>
        <Link to="/cat">
            <div>The Catwalk</div>
            </Link>
        <Link to="/ad">
            <div>AdWatch</div>
            </Link>
        <Link to="/about">
            <div>About</div>
            </Link>
    
            </ul>
        <img src="/image1.jpeg" alt="image1" />
        <p>CLorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem delectus non ratione unde alias neque vel veritatis esse sunt dolor! Ab modi cum doloribus recusandae quo numquam architecto, aliquam voluptates?
    Illo impedit nostrum id laborum tenetur, consectetur ipsum consequatur incidunt quia aliquam ea nisi dolores corrupti repellendus architecto itaque fugiat voluptates ut dolorum autem necessitatibus possimus mollitia assumenda? Velit, cumque.
    Veniam aliquid alias dolorem quidem laboriosam odit blanditiis facilis exercitationem, sed adipisci fuga vitae harum porro delectus. Amet autem nam harum pariatur temporibus error deleniti cumque eaque ipsa fuga. Quasi?
    Voluptates eos aperiam eveniet corporis necessitatibus. Ad ipsa qui eius alias perspiciatis beatae cupiditate, exercitationem necessitatibus neque asperiores animi excepturi accusamus modi? Eos voluptatum illo reprehenderit alias assumenda consequatur quos?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis possimus aliquid maiores eveniet excepturi molestias, doloribus debitis quidem. Recusandae et error rem possimus facere ad id ab reiciendis, non consequuntur.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vel voluptatum similique adipisci. Quae reprehenderit odit rerum reiciendis minima at eligendi dolore esse alias sunt voluptas repellendus, voluptatibus laudantium unde.</p>
<Link to="/contiue" class="continue">Continues...</Link>
    
     <hr></hr>
     <h3>11/11/20</h3>
     <h2>Vintage in Vogue</h2>
     <img src="./image2.jpeg" alt="image2" />
     <p>SLorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eum dignissimos consectetur itaque necessitatibus nihil molestias tempore, debitis doloremque consequuntur deserunt dolorum et animi laudantium nam, magni dolore. Minus, natus.
     Veritatis repellendus nostrum, sint nobis laudantium exercitationem ipsum saepe facilis corrupti ducimus animi? Nobis omnis eligendi tenetur, facilis aut maiores maxime repellendus? Impedit iure reprehenderit ipsa doloremque mollitia dicta perspiciatis.
     Velit at, recusandae animi non nulla ea voluptatum in maxime itaque voluptas consectetur obcaecati, reprehenderit dolorum praesentium officiis fugiat aliquid libero harum dolor vero natus nobis exercitationem! Ipsa, similique fuga!
     Accusamus, id. Doloremque fugiat, tempora quis eos, delectus eligendi molestias aperiam provident amet est rerum? Impedit commodi quam dolor asperiores temporibus expedita non, quasi quidem quod nostrum culpa dolorem facere.
     Incidunt alias consequuntur, repellat, nobis modi architecto eligendi aliquid at tenetur exercitationem eaque praesentium illo perferendis sit? Deserunt ratione, neque consequatur quidem illum, nesciunt provident libero pariatur animi autem perspiciatis?
     Inventore a ducimus ex explicabo! Nihil maiores odio cupiditate, sequi ducimus saepe dolor sint enim qui veniam quidem temporibus, suscipit mollitia amet! Nihil velit aliquam minima nam saepe consequatur repellat!</p>
     <Link to="/contiue" class="continue">Continues...</Link>
     
     <br />
    <hr></hr>
     <ul>
        <Link to="/women" className="end">
            <div>Women's</div>
            </Link>
            <Link to="/men" className="end">
            <div>Men's</div>
            </Link>
        <Link to="/on" className="end">
            <div>On The Street</div>
            </Link>
        <Link to="/cat" className="end">
            <div>The Catwalk</div>
            </Link>
        <Link to="/ad" className="end">
            <div>AdWatch</div>
            </Link>
        <Link to="/about" className="end">
            <div>About</div>
            </Link>
        <Link to="/tip" className="end">
            <div>Tips</div>
            </Link>
            </ul>
    
    <h3>&copy; 2013 Valet Industries, Inc</h3>
    </>
    )
}
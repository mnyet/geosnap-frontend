import React from 'react'
import Page from '../../shared/Page';
import UsersList from '../components/UsersList';

export default function Users() {
    /*
     * Users page
     */

    const dummy = [
        { id: "u1", name: "bear", image: "https://i.pinimg.com/736x/45/c4/b0/45c4b0645f1a37e6cc9bc20b2a3db68d.jpg", places: 72 },
        { id: "u4", name: "bear john", image: "https://i.pinimg.com/736x/b5/f7/cc/b5f7ccef43c3c968baf227cc1fc349e9.jpg", places: 70 },
        { id: "u3", name: "is", image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/1200px-Patrick_Star.svg.png", places: 1 },
        { id: "u5", name: "bear niceqwdqwedqweqweqweniceqwdqwedqweqweqweniceqwdqwedqweqweqweniceqwdqwedqweqweqweniceqwdqwedqweqweqweniceqwdqwedqweqweqweniceqwdqwedqweqweqweniceqwdqwedqweqweqweniceqwdqwedqweqweqweniceqwdqwedqweqweqweniceqwdqwedqweqweqweniceqwdqwedqweqweqwe", image: "https://i.pinimg.com/736x/5c/65/58/5c6558a17be2e41b4f0d6605194be853.jpg", places: 25 },
        { id: "u2", name: "bear nice", image: "https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-after.jpg?auto=avif,webp&format=jpg&width=944", places: 25 },
        { id: "u6", name: "bear niceqwdqwedqweqweqwe", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRquhYjNhRJXmRZc-XCAh0ua3nt20c3tfp3q3bDUUktwdRqCVDQ9XGcHvWFs2UMM8Qp508&usqp=CAU", places: 25 },
        { id: "u7", name: "bear nice", image: "https://visafoto.com/img/source355x388_in.jpg", places: 25 }
    ];

    return (
        <Page>
            {/* UserList.js */}
            <UsersList items={dummy} />
        </Page>
    )
}

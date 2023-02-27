export const userColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "user",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
            alt="avatar"
          />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  },
];

// export const userRows = [
//   [
//     {
//       _id: "63faf9f0935959d53edebd76",
//       username: "user1",
//       email: "user1@gmail.com",
//       country: "India",
//       city: "Bangalore",
//       phone: "+91 1234123123",
//       // password: "$2a$10$4e3ke1Pzh0yueEFDSH7X/eJcmbmNhmlBFk8sn8kdMXpSU4oo..6S.",
//       // isAdmin: true,
//       // createdAt: "2023-02-26T06:19:28.897Z",
//       // updatedAt: "2023-02-26T06:19:28.897Z",
//       // __v: 0,
//     },
//     {
//       _id: "63fafa21935959d53edebd78",
//       username: "user2",
//       email: "user2@gmail.com",
//       country: "India",
//       city: "Bagalkot",
//       phone: "+91 1434123123",
//       // password: "$2a$10$yUcNOnNzfryIiGIfJt4M1.epJ79GwYHn5sebQofoPectxEgqd/6dO",
//       // isAdmin: false,
//       // createdAt: "2023-02-26T06:20:17.474Z",
//       // updatedAt: "2023-02-26T06:20:17.474Z",
//       // __v: 0,
//     },
//     {
//       _id: "63fafa40935959d53edebd7a",
//       username: "user3",
//       email: "user3@gmail.com",
//       country: "India",
//       city: "Mysore",
//       phone: "+91 9434123123",
//       // password: "$2a$10$EItioRbXUC0HBAa56Kx0k.cjmbA2ofL94rli1FrYqzpwuguADIyQe",
//       // isAdmin: false,
//       // createdAt: "2023-02-26T06:20:48.975Z",
//       // updatedAt: "2023-02-26T06:20:48.975Z",
//       // __v: 0,
//     },
//     {
//       _id: "63fafa6b935959d53edebd7c",
//       username: "user4",
//       email: "user4@gmail.com",
//       country: "India",
//       city: "Belagavi",
//       phone: "+91 9434123123",
//       // password: "$2a$10$q1JTUgphl971QZRSOPTGy.p7YFQRLn4fK5Wtd99fbYirfYSd8s6Vy",
//       // isAdmin: false,
//       // createdAt: "2023-02-26T06:21:31.905Z",
//       // updatedAt: "2023-02-26T06:21:31.905Z",
//       // __v: 0,
//     },
//     {
//       _id: "63fafa8b935959d53edebd7e",
//       username: "user5",
//       email: "user5@gmail.com",
//       country: "India",
//       city: "Hubli",
//       phone: "+91 9934123123",
//       // password: "$2a$10$ed1P1nh7nGL.iD0rH9IVJeCIt5dGsSMaASkK91q3WaQ9R.4/HJJAW",
//       // isAdmin: false,
//       // createdAt: "2023-02-26T06:22:03.729Z",
//       // updatedAt: "2023-02-26T06:22:03.729Z",
//       // __v: 0,
//     },
//     {
//       _id: "63fafbf4935959d53edebd80",
//       username: "user6",
//       email: "user6@gmail.com",
//       country: "India",
//       img: "https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=600",
//       city: "Udapi",
//       phone: "+91 9964123123",
//       // password: "$2a$10$zDHWW1DQVDist0pgkBIBsueQId.9rxXdoV.SY0YiINXiiqJSQQP86",
//       // isAdmin: false,
//       // createdAt: "2023-02-26T06:28:04.390Z",
//       // updatedAt: "2023-02-26T06:28:04.390Z",
//       // __v: 0,
//     },
//   ],
// ];

export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
];

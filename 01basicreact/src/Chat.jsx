import React from "react";

const Chat = () => {
  let chatApi = [
    {
      img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
      name: "John",
      message: "Hello, how are you?",
    },
    {
      img: "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_640.png",
      name: "Jane",
      message: "I'm good, thanks. How about you?",
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/03/26/22/13/man-1281562_640.jpg  ",
      name: "Vijay",
      message: "I'm good, thanks. How about you?",
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/01/25/19/48/man-1161337_640.jpg",
      name: "Arjun school",
      message: "I'm good, thanks. How about you?",
    },
    {
      img: "https://cdn.pixabay.com/photo/2022/09/08/15/16/cute-7441224_640.jpg",
      name: "Brother",
      message: "I'm good, thanks. How about you?",
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/12/07/21/01/cartoon-1890438_640.jpg",
      name: "Gorge Uncle",
      message: "I'm good, thanks. How about you?",
    },
  ];
  return (
    <div style={{padding:"10px", width: "20%", backgroundColor: "gray", border:"1px solid black" }}>
      <input
        type="search"
        placeholder="search                                             🔍"
        style={{ width: "100%", fontSize: "20px", padding:"10px" }}
        
      />
      {chatApi.map((items) => {
        return (
          <div
            style={{
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "white",
              boxShadow: "5px 10px",
              marginTop: "5px",
            }}
          >
            <img
              src={items.img}
              alt="profile Img"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
              }}
            />
            <div
              style={{
                display: "inline-block",
                flexDirection: "column",
                flexGrow: "2",
                justifyContent: "center",
                alignItems: "start",
              }}
            >
              <p style={{ fontWeight: "bold" }}>{items.name}</p>
              <p>{items.message}</p>
            </div>
            <div
              style={{
                display: "inline-block",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p>11:26</p>
              <p>⭐</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Chat;

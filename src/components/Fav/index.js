import React from "react";
import { Button } from 'antd';
import { StarOutlined, CloseOutlined } from '@ant-design/icons';

import useUser from "hooks/useUser";


export default function Fav({ name, date, vote, image, id}) {
  const { addFav, favs=[], deleteFav } = useUser();

  const isFaved = favs.some((fav) => fav.id === id);

  const handleClick = () => {
    addFav({ name, date, vote, image, id});
  };

  const deleteClick =() => {
    deleteFav(id);
  }

  return (
    <>
      {
          isFaved
          ?
          <Button type="primary" onClick={deleteClick} shape="circle" icon={<CloseOutlined />} danger/>
          :
          <Button type="primary" onClick={handleClick} shape="circle" icon={<StarOutlined />}/>
      }
    </>
  );
}
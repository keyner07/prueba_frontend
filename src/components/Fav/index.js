import React from "react";
import { Button } from 'antd';
import { StarOutlined, CloseOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { addFavourites, deleteFavourites} from '../../store/dispatch';


export default function Fav({ name, date, vote, image, id}) {
  const favs = useSelector(state => state.movies);

  const isFaved = favs.some((fav) => fav.id === id);

  const handleClick = () => {
    addFavourites({ name, date, vote, image, id});
  };

  const deleteClick =() => {
    deleteFavourites({id})
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
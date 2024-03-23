import React from "react";
import { getArtistInfo } from "../../utils/http";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader/Loader";
import useStoreContext from "../../context/StoreContext";
import { useParams } from "react-router-dom";
import { format } from "../../utils/format";

const ArtistInfo = () => {
  const ctx = useStoreContext();
  const { state } = ctx;
  const { artistId } = useParams();

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["artistinfo"],
    queryFn: ({ signal }) => {
      return getArtistInfo({ signal, token: state.token, artistId: artistId });
    },
    staleTime: 0,
  });
  console.log(data);

  let artist;
  if (data) {
    artist = {
      name: data.name,
      image: data.images[0].url,
      followers: data.followers.total,
    };
  }

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div
      className="bg-artist"
      style={{ backgroundImage: `url(${artist.image})` }}
    >
      <h2>{artist.name}</h2>
      <span>{format(artist.followers)} monthly listeners</span>
    </div>
  );
};

export default ArtistInfo;

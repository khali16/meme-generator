import useMemes from "../../../hooks/useMemes";
import styles from "./MemesTemplate.module.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useState } from "react";
import SelectedMeme from "../SelectedMeme/SelectedMeme";
import { MemeDetails } from "../../../interfaces/app_interfaces";

const MemesTemplate = () => {
  const { memesData } = useMemes();

  console.log(memesData?.data.memes);
  const [chosenImage, setChosenImage] = useState<MemeDetails>();
  return (
    <>
      {!memesData ? (
        <p>Loading...</p>
      ) : (
        <>
          <ImageList className={styles.memeWrapper} cols={3} rowHeight={170}>
            {memesData.data.memes.map((meme) => (
              <ImageListItem>
                <img
                  src={`${meme.url}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${meme.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={meme.name}
                  loading="lazy"
                  onClick={() => {
                    setChosenImage({
                      url: meme.url,
                      name: meme.name,
                      width: meme.width,
                      height: meme.height,
                      boxCount: meme.box_count,
                    });
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
          {chosenImage && (
            <SelectedMeme
              src={chosenImage.url}
              name={chosenImage.name}
              height={chosenImage.height}
              width={chosenImage.width}
              boxCount={chosenImage.boxCount}
            />
          )}
        </>
      )}
    </>
  );
};

export default MemesTemplate;

import { ImageList } from "@mui/material";
import {ImageListItem} from "@mui/material";
export const ImageGallery=({images})=>{
  return (
    <ImageList sx={{ width: '100%', height: 600 }} cols={3} rowHeight={164}>
      {images?.map((item) => (
        <ImageListItem key={item}>
          <img
            src={`${item}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}


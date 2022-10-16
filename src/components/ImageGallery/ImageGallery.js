import ImageGlleryItem from '../ImageGalleryItem/ImageGalleryItem'

export default function ImageGallery({ items }) {
    return (
      <ul>
        {items.map(item => (
          <ImageGlleryItem key={item.id} item={item} />
        ))}
      </ul>
    );
  }
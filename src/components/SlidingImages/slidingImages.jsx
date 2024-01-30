import styles from "./style.module.scss";

const slider1 = [
  {
    color: "#e3e5e7",
    src: "c2.jpg",
  },
  {
    color: "#d6d7dc",
    src: "decimal.jpg",
  },
  {
    color: "#e3e3e3",
    src: "funny.jpg",
  },
  {
    color: "#21242b",
    src: "google.jpg",
  },
];

const slider2 = [
  {
    color: "#d4e3ec",
    src: "maven.jpg",
  },
  {
    color: "#e5e0e1",
    src: "panda.jpg",
  },
  {
    color: "#d7d4cf",
    src: "powell.jpg",
  },
  {
    color: "#e1dad6",
    src: "wix.jpg",
  },
];

export default function SlidingImages() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {slider1.map((item, index) => {
          const { src, color } = item;
          return (
            <div key={src + index} style={{ backgroundColor: color }}>
              <img
                src={`/images/${item.src}`}
                alt=""
                className={styles.img}
                width={500}
                height={300}
              />
            </div>
          );
        })}
      </div>
      <div>
        {slider2.map((item, index) => {
          const { src, color } = item;
          return (
            <div key={src + index} style={{ backgroundColor: color }}>
              {/* <Image
              src={`/images/${item.src}`}
              alt=""
              className={styles.img}
              width={400}
              height={300}
            /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

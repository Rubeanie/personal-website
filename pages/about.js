import Head from "next/head";
import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

export default function About() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "ruben-p",
    },
  });

  const personalPhoto = cld.image(
    "v1642990790/Images/About/Personal-Photo.webp"
  );

  return (
    <div className="page">
      <Head>
        <title>About | Ruben Panzich</title>
        <meta
          name="description"
          content="More information about Ruben Panzich."
        />
        <meta key="robots" name="robots" content="index,follow" />
        <meta key="googlebot" name="googlebot" content="index,follow" />
      </Head>
      <hero>
        <div className="row">
          <div className="flex-padding" style={{ flex: "33%" }}>
            <div className="column">
              <AdvancedImage
                cldImg={personalPhoto}
                style={{ width: "100%" }}
                plugins={[
                  lazyload(),
                  placeholder({ mode: "predominant-color" }),
                  placeholder({ mode: "blur" })
                ]}
              />
              <h2>
                -Ruben.P
                <br />▼
              </h2>
            </div>
          </div>
          <div className="flex-padding" style={{ flex: "66%" }}>
            <div className="column">
              <h1-image>ABOUT</h1-image>
            </div>
          </div>
        </div>
      </hero>
      <heros>
        <div className="row">
          <div className="column">
            <p>
              Hi! <br /> My name is Ruben Panzich, I am a student currently
              attending year 12 at Hale school, I am doing ATAR and
              have already achieved a: <br /> &quot;Certificate IV in Digital
              and Interactive Games&quot;
            </p>
            <h2>My Story</h2>
            <p>
              Ever since I was a little boy, I’ve been obsessed with video
              games. This passion has propelled me into the wonderful world of
              stem where I have been taken to many places ranging from school to
              university. Since I’ve begun this journey I’ve learnt about Unity,
              design, 3D modeling, coding and many other skills, during this
              journey a lot of these skills have been given time to flourish in
              the subject AIT, leading me to the point I am now.
            </p>
          </div>
        </div>
      </heros>
    </div>
  );
}

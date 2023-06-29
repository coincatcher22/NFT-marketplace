import React from "react";
import ImageComponent from "../../imageComponent/ImageComponent";

const FloorGraphicSmallView = ({ data }: any) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {data.featured.map((item: any, i: any) => (
        <div key={i}>
          <ImageComponent
            src={item.src}
            height={item.height}
            width={item.width}
            className="rounded-lg"
          />
          <h5 className="text-xl font-Roboto-Bold mt-3">
            {item.title}
            <span className="text-sm block text-red-500">(coming soon)</span>
          </h5>
        </div>
      ))}
    </div>
  );
};

export default FloorGraphicSmallView;

import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription = [],
  href,
  image,
  tags = [],
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  const base = import.meta.env.BASE_URL;

  return (
    <>
      {/* Project Summary */}
      <div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(`${base}${image}`)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-2xl font-semibold text-white">{title}</p>
          <div className="flex gap-5 mt-2 text-sand flex-wrap">
            {tags.map((tag) => (
              <span key={tag.id} className="text-sm font-medium">
                {tag.name}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation text-white"
          aria-label={`Read more about ${title}`}
        >
          Read More
          <img
            src={`${base}assets/arrow-right.svg`}
            alt="Arrow right"
            className="w-5 h-5"
          />
        </button>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />

      {/* Modal Details */}
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;

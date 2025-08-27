import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription = [],
  image,
  tags = [],
  href,
  closeModal,
}) => {
  const base = import.meta.env.BASE_URL;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-5 right-5 p-2 rounded-sm bg-midnight hover:bg-gray-500"
          aria-label="Close project details"
        >
          <img
            src={`${base}assets/close.svg`}
            alt="Close"
            className="w-6 h-6"
          />
        </button>

        {/* Project Image */}
        <img
          src={`${base}${image}`}
          alt={title}
          className="w-full rounded-t-2xl object-cover"
        />

        {/* Content */}
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>

          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400">
              {subDesc}
            </p>
          ))}

          <div className="flex items-center justify-between mt-4">
            {/* Tags */}
            <div className="flex gap-3 flex-wrap">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={`${base}${tag.path}`}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>

            {/* External Link */}
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-white hover-animation"
              >
                View Project
                <img
                  src={`${base}assets/arrow-up.svg`}
                  alt="Arrow up"
                  className="size-4"
                />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;

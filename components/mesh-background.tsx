export function MeshBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/mesh.svg"
        alt=""
        className="mesh-fade absolute top-[-8%] left-1/2 w-[160%] max-w-none -translate-x-1/2 opacity-80 sm:w-[120%]"
      />
    </div>
  );
}

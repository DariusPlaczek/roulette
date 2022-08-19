export default function BigJeton({coinValue}) {

  return (
      <div className="absolute top-20 left-10 w-16 h-16 flex justify-center items-center rounded-full border-4 border-dashed border-green-900 bg-amber-200 font-bold text-2xl text-black z-20">
        {coinValue}
      </div>
  )

}
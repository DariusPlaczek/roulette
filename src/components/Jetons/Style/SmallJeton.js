export default function SmallJeton({coinValue}) {

  return (
      <div className="absolute bottom-2 left-2 w-8 h-8 flex justify-center items-center rounded-full border-1 border-dashed border-green-900 bg-amber-200 text-black">
        {coinValue}
      </div>
  )

}
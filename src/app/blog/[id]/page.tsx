export default function Page({params}:{params:{id:string}}) {
    return (
     <h1 className='bg #d9d9d9'>
      Blog Id:{params.id}
      </h1>
    )
  }

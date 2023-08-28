import React, {useState, useEffect} from "react";

const IndImg = (props) => {

  const [preview, setPreview] = useState()
  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!props.selectedFile) {
          setPreview(undefined)
          return
      }
      var arr = []
      for (var i = 0; i < props.selectedFile.length; i++) {
        if(i < 5){
          const objectUrl = URL.createObjectURL(props.selectedFile[i])
          arr.push(objectUrl)
        }
      }
      setPreview(arr)

      // free memory when ever this component is unmounted
      return () => URL.revokeObjectURL(arr)
  }, [props.selectedFile])
console.log(preview)
return (
  <div className="flex px-2 col-span-2 justify-center	">
    {preview !== undefined &&
      preview.map((image) => {
        console.log(image)
       return <img src={image} className="max-h-20 mx-2"/>
      })
    }
  </div>
)

}

export default IndImg;
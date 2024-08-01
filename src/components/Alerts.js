import React, { useEffect, useRef, useState } from 'react'

export default function Alerts(props) {
  const [alerts, setAlert] = useState(0);
  useEffect(() => {
    if (props.alert.status && props.alert.status != null) {
      document.getElementById('alert-data').classList.add('show')
      const timer = setTimeout(() => {
        document.getElementById('alert-data').classList.remove('show')
        document.getElementById('alert-data').classList.add('hide')
      }, 3000);

    }
  })

  return (
    <div>
      {
        props.alert.status && props.alert.status != null && <div className="alert alert-danger alert-dismissible fade show" role="alert" id='alert-data' >
          <strong>Hey!</strong> {props.alert.message}.
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" ></button>
        </div>
      }
    </div>

  )
}

import React from 'react'

export default function Modal() {
  return (
    <div>
      <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" ref={modalRef} data-bs-target="#exampleModal" ></button>
            
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"> 
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" >
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Title:</label>
                                    <input type="text" className="form-control" name='title' id="recipient-name" value={note.title} onChange={handleModalData} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message-text" className="col-form-label">Description:</label>
                                    <textarea className="form-control"  name="description" id="message-text" value={note.description} onChange={handleModalData}></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Send message</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

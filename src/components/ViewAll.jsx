import React from 'react'

const ViewAll = () => {
    return (
        <div>
            <div className="container">
                <div className="row" g-3>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    
                                    <th scope="col">title</th>
                                    <th scope="col">description</th>
                                    <th scope="col">publisher</th>
                                    <th scope="col">price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                              



                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll
import React from "react";

function Sidebar(props) {
    return (
        <div class="row">
            <div class="col-lg-3">
                <div class="pos-f-t">
                    <nav class="navbar navbar-dark bg-dark">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <h3 class="text-white">MackList</h3>
                    </nav>
                    <div class="collapse" id="navbarToggleExternalContent">
                        <nav class="nav flex-column bg-dark">
                            <a class="nav-link active" href="#">Cateory</a>
                            <a class="nav-link" href="#">Category</a>
                            <a class="nav-link" href="#">Category</a>
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Category</a>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="col-lg-9">
            <h1>testing</h1>
            </div>
        </div>

    )
}

export default Sidebar
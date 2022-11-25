const ComingSoon = ( {what, howFast} ) => { // now you don't need "props." in front of the properties.
    return (
        <div className="comingSoon">
            <h1>{what} - Coming Soon</h1>
            <p>
                It will be here. Just be patient. (Reusable.) {howFast}
            </p>
        </div>
    );
}; 
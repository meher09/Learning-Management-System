import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <div class="list-group text-start mx-md-4">
                <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
                    The current button
                </button>
                <button type="button" class="list-group-item list-group-item-action">A second item</button>
                <button type="button" class="list-group-item list-group-item-action">A third button item</button>
                <button type="button" class="list-group-item list-group-item-action">A fourth button item</button>
                <button type="button" class="list-group-item list-group-item-action">A disabled button item</button>
            </div>
        </div>
    );
};

export default Sidebar;
import React, { memo } from 'react';
import { PropTypes } from 'prop-types';

import './FooterItem.css';

const FooterItem = memo((props) => {
    const { setStatusFilter, activeButton, clearCompleted, numOfTodosLeft, numOfTodos } = props
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{numOfTodosLeft}</strong>
                <span> </span>
                <span>{numOfTodosLeft > 1 ? 'items' : 'item'}</span>
                <span> Remain</span>
            </span>
            <ul className="filters">
                <li>
                    <a
                        href="#/"
                        className={`${activeButton === 'ALL' ? "selected" : ''}`}
                        onClick={() => setStatusFilter('ALL')}
                    >
                        All
                    </a>
                </li>
                <span></span>
                <li>
                    <a
                        href="#/active"
                        className={`${activeButton === 'ACTIVE' ? "selected" : ''}`}
                        onClick={() => setStatusFilter('ACTIVE')}
                    >
                        Active
                    </a>
                </li>
                <span></span>
                <li>
                    <a
                        href="#/completed"
                        className={`${activeButton === 'COMPLETED' ? "selected" : ''}`}
                        onClick={() => setStatusFilter('COMPLETED')}
                    >
                        Completed
                    </a>
                </li>
            </ul>
            {
                numOfTodosLeft < numOfTodos && <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
            }
        </footer>
    )
})

FooterItem.prototype = {
  setStatusFilter: PropTypes.func, 
  activeButton: PropTypes.string, 
  clearCompleted: PropTypes.func, 
  numOfTodosLeft: PropTypes.number, 
  numOfTodos: PropTypes.number
}

export default FooterItem;
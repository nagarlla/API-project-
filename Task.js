import React, { Component } from 'react'
import './Model.css';
export class Tasks extends Component {
  render() {
    return (
      <div>
        <div class="github-profile">
            <div class="name-bio">
                <span class="name">John Doe</span>
                <p class="bio">Bio goes here</p>
                <span class="location">Orlando</span>
            </div>
            <div class="heroes">
                <div class="hero">
                <span class="title">Heroes</span>
                <p class="description">Heroes description goes here</p>
                <span class="tech">JavaScript angular angularjs</span>
                </div>
                <div class="hero">
                <span class="title">Heroes</span>
                <p class="description">Heroes description goes here</p>
                <span class="tech">Javascript angular angularjs Angular 2+</span>
                </div>
                <div class="hero">
                <span class="title">Heroes</span>
                <p class="description">Heroes description goes here</p>
                <span class="tech">Javascript angular angularjs Angular 2+</span>
                </div>
                <div class="hero">
                <span class="title">Heroes</span>
                <p class="description">Heroes description goes here</p>
                <span class="tech">Javascript angular angularjs</span>
                </div>
                <div class="hero">
                <span class="title">Heroes</span>
                <p class="description">Heroes description goes here</p>
                <span class="tech">Javascript angular angularjs Angular 2+</span>
                </div>
            </div>
            <div class="pagination">
                <span class="prev">←Older</span>
                <span class="page-number">600</span>
            </div>
            <div class="twitter-link">
                <a href="https://twitter.com/john doe">Twitter: @john doe</a>
            </div>
            </div>
      </div>
    )
  }
}

export default Tasks

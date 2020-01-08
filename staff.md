---
layout: page
title: Staff
description: "These folks help run and maintain Overcast Community"
---

<div class="container">
    {% for groups in site.data.groups %}
        <div class="row staff-group">
            <div class="col">
                <h2 style="color: {{ groups[1].color }}">{{ groups[0] }}<small class="staff-count"> {{ groups[1].members.size }}</small></h2>
                <hr />
            </div>
        </div>
        <div class="row">
            {% for member in groups[1].members %}
                <div class="col-md-3 col-sm-6">
                    <div class="staff-entry">
                        <img class="avatar" src="{{ site.avatar_provider }}{{ member.username }}/84">
                        <span class="staff-username" style="color: {{ groups[1].color }}">{{ member.username }}</span>
                        <span class="staff-role">{{ member.role }}</span>
                        <div class="staff-social">
                            {% if member.twitter %}
                                <a href="https://twitter.com/{{ member.twitter }}" target="_blank"><i class="fab fa-twitter"></i></a>
                            {% endif %}
                            {% if member.email %}
                                <a href="mailto:{{ member.email }}"><i class="fas fa-envelope"></i></a>
                            {% endif %}
                        </div>
                    </div>
                </div>
            {% endfor %}
        </div>
    {% endfor %}
</div>

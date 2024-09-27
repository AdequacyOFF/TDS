package com.tds.tds_project.entity;

import jakarta.persistence.*;
// import java.util.Set;

@Entity
@Table(name = "project")
public class Project {
    @Id
    @Column(name = "pr_id")
    private Integer id;

    @Column(name = "pr_name", nullable = false)
    private String name;

    @Column(nullable = false)
    private String description;

    @Column(name = "p_progress", nullable = false)
    private Integer progress;

    @Column(name = "team_id", nullable = false)
    private Integer teamId;

    // Геттеры и сеттеры
}

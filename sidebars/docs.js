/**
 * Copyright (c) Moodle Pty Ltd.
 *
 * Moodle is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Moodle is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Moodle.  If not, see <http://www.gnu.org/licenses/>.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    docs: [
        'introduction',
        {
            label: 'Getting started',
            type: 'link',
            href: '/general/development/gettingstarted',
        },
        {
            label: 'Developer guides',
            type: 'category',
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'guides',
                },
            ],
        },
        {
            label: 'API guides',
            type: 'category',
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'apis',
                },
            ],
            link: {
                type: 'doc',
                id: 'apis',
            },
        },
        {
            type: 'html',
            value: '<hr>',
        },
        {
            label: 'Moodle App',
            type: 'category',
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'moodleapp',
                },
                {
                    label: 'Release notes',
                    type: 'link',
                    href: '/general/app_releases',
                },
            ],
            link: {
                type: 'doc',
                id: 'moodleapp',
            },
        },
        {
            type: 'html',
            value: '<hr>',
        },

        {
            label: 'Release notes',
            type: 'link',
            href: '/general/releases/4.0',
        },
        {
            label: 'Projects',
            type: 'link',
            href: '/general/projects',
        },
    ],
};

module.exports = sidebars;

/*
 * This file is part of the "get commit messages" Action for Github.
 *
 * Copyright (C) 2019 by Gilbertsoft LLC (gilbertsoft.org), Ian Evans
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * For the full license information, please read the LICENSE file that
 * was distributed with this source code.
 */

/**
 * Imports
 */
import * as core from '@actions/core'

/**
 * Main function
 */
async function run(): Promise<void> {
  try {
    const commitsString = core.getInput('commits')
    const commits = JSON.parse(commitsString)

    let commitMessages: string = ''

    for (const {commit, sha} of commits) {
      commitMessages.concat(commit.message)
    }

    core.setOutput('commit-messsages', commitMessages)
  } catch (error) {
    core.error(error)
    core.setFailed(error.message)
  }
}

/**
 * Main entry point
 */
run()
